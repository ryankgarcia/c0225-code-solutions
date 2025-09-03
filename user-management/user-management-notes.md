# user-management-notes

## Notes

we only store the hashed password in the database, not the original. for security purposes

third party user management companies => Auth0, AWS Cognito, Firebase Authentication

There are several features that must be implemented to provide user management:

1. Registration, user provides credentials that identify themselves
2. Authentication, user supplies credentials to prove their identity, then those credentials are compared against those provided at registration
3. Authorization, system determines which resources the user is allowed to access

Registration:
when a user signs up, they provide credentials that they will use in the future to identify themselves, usually username and password but now things have gotten more complex so extra information is required to identify a user.

Authentication:
After a user has registered, they will want to gain access to the product's services. User will provide their credentials to identify themselves and prove they are the same person who registered. The service verifies that the credentials are valid and that they correctly identify the user.

If the user's provided credentials match, the same as the one they provided during registration, the user will be successfully authenticated.

After a user is authenticated, a token is generated that indicates the user has been authenticated. This token is passed between the client and the server in subsequent req/res. The token allows communication between client & server without the need for the user to provide their credentials on every request.

Authorization:
The server only takes actions or responds with resources the user is authorized to access.
