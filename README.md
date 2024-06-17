# Multi-Tenant Next.js App

## Description
This is a multi-tenant web application built with Next.js. The application customizes the page content based on the subdomain accessed.

## Setup

1. Clone the repository
2. Install dependencies:
   npm install
3. Create .env.local in root and add BASE_DOMAIN=localhost:3000
4. npm run dev

## Scalability
One can add more subdomain and their configs in utils/subDomainConfig.ts file
