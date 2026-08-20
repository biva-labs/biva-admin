# syntax=docker/dockerfile:1

# Dependencies stage
FROM oven/bun:1 AS deps
WORKDIR /app
COPY bun.lock package.json ./
RUN bun install --frozen-lockfile --production

# Runtime stage
FROM oven/bun:1 AS runtime
WORKDIR /app

# Create non-root user for security

RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup -s /bin/bash -m appuser
USER appuser

# Environment (non-sensitive config only)
ENV NODE_ENV=production
ENV BUN_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy dependencies and source from deps stage
COPY --from=deps --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --chown=appuser:appgroup . .

EXPOSE 3000
CMD ["bun", "run", "index.ts"]
