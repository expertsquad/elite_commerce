# Stage 1: Build
FROM node:18 as builder

# Set working directory
WORKDIR /elite_commerce

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Build the project
RUN npm run build

# Stage 2: Run
FROM node:18 as runner

# Set working directory
WORKDIR /app

# Copy necessary files from the builder stage
COPY --from=builder /elite_commerce/package*.json ./
COPY --from=builder /elite_commerce/node_modules ./node_modules
COPY --from=builder /elite_commerce/.next .next
COPY --from=builder /elite_commerce/*.json ./

# Set environment variables
# ENV NODE_ENV production
ENV NEXT_PUBLIC_server_url https://api.theqprint.com/
ENV NEXT_PUBLIC_store_name Elite Commerce

# Expose port
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
