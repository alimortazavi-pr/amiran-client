# Base image
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
RUN npm install -g pnpm
WORKDIR /app

# Copy package files AND .npmrc
COPY package.json pnpm-lock.yaml .npmrc ./
# Install dependencies with pnpm
RUN pnpm install --frozen-lockfile

# Build stage
FROM base AS builder
WORKDIR /app
RUN npm install -g pnpm

# Copy dependencies, source, and .npmrc
COPY --from=deps /app/node_modules ./node_modules
COPY .npmrc ./
COPY . .

# Disable Next.js telemetry during the build
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm run build

# Production image, standalone
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only required files for standalone mode
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 6030

ENV PORT=6030
ENV HOSTNAME="0.0.0.0"

# Run the standalone server
CMD ["node", "server.js"]