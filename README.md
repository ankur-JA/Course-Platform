# Course Selling Website

## Description
This project is a full-stack web application for selling online courses. Built using React.js for the frontend, Node.js for the backend, and MongoDB for the database. It features JWT and Google authentication, payment integration with Razorpay, and Google Analytics for tracking.

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB
- Razorpay account for payments
- Google API credentials for authentication

### Installation

1. **Navigate to the Project Directory**

    ```bash
    cd your-repo-name
    ```

2. **Install Dependencies**

    - **Frontend:** Navigate to the client folder and install dependencies:

        ```bash
        cd client
        npm install
        ```

    - **Backend:** Navigate to the server folder and install dependencies:

        ```bash
        cd ../server
        npm install
        ```

3. **Configure Environment Variables**

    Create a `.env` file in the `server` directory and add the following environment variables:

    ```env
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    RAZORPAY_KEY_ID=your_razorpay_key_id
    RAZORPAY_KEY_SECRET=your_razorpay_key_secret
    ```

4. **Start the Development Server**

    - **Backend:** Start the server:

        ```bash
        cd server
        npm start
        ```

    - **Frontend:** In a new terminal, start the client:

        ```bash
        cd client
        npm start
        ```

    The backend will be accessible at [http://localhost:5000](http://localhost:5000) and the frontend at [http://localhost:3000](http://localhost:3000).

## Usage

- **Course Sellers:** Sign up and log in to add and manage your courses.
- **Users:** Log in with Google, browse available courses, and make payments through Razorpay.

## Contributing

Contributions are welcome! Please submit a pull request with your changes or improvements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or feedback, please contact [your.email@example.com](mailto:your.email@example.com).
