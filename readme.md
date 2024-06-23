# OneDrive Application

## Overview

This application integrates with Microsoft OneDrive to provide file management functionalities via a RESTful API and real-time updates using WebSockets.

### Features

- **File Management**: Allows users to list files, download files, and manage file permissions on OneDrive.
- **Real-Time Updates**: Subscribes users to file updates using WebSocket connections.
- **Authentication**: Integrates Azure AD authentication for secure access to OneDrive resources.

## Setup and Execution

### Prerequisites

- Node.js (version 14.x or higher)
- npm (Node Package Manager)
- Microsoft Azure AD Application (for authentication)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/princedubey/one-drive-server.git

### Configuration

1. **Install dependencies:**:
   ```terminal
   npm install
2. **Environment Variables:**:
   ```Create a .env file in the root directory (onedrive-app/.env) and define the following variables:
   PORT=3000
   CLIENT_ID=<your_client_id>
   AUTHORITY=<your_authority_url>
   CLIENT_SECRET=<your_client_secret>

## Running the Application

### Start the server
    ```bash
    npm start

## Testing

- Use tools like Postman or curl to test API endpoints.
- Use WebSocket clients to connect to the server and test real-time updates.

## Example Usage

### List Files

Send a GET request to `http://localhost:<PORT>/one-drive/list-files` to retrieve a list of files from OneDrive.

### Download File

Send a GET request to `http://localhost:<PORT>/one-drive/download-file/<fileId>` to download a specific file from OneDrive.

### Manage Permissions

Send a GET request to `http://localhost:<PORT>/one-drive/list-permissions/<fileId>` to retrieve permissions for a specific file on OneDrive.

## Troubleshooting

- If encountering issues with Azure AD authentication or API access, double-check the Azure configuration and ensure correct credentials are used.
- Refer to error messages in the console or logs (`logs/` directory) for debugging.
