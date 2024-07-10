# API Specification for Page Improvements

## Base URL

[https://tapp-interview-api.vercel.app/](https://tapp-interview-api.vercel.app/)

## Endpoints

### 1. Get Page Improvements

- **Endpoint**: `/page-improvements/:projectId`
- **Method**: GET
- **Description**: Retrieve all page improvements for a specific project.
- **Path Parameters**:
  - `projectId` (string) - The ID of the project.
- **Response**:

  - **Status Code**: 200
  - **Content Type**: application/json
  - **Body**:
    ```typescript
    [
      {
        "id": string,
        "path": string,
        "type": "TITLE" | "DESCRIPTION" | "KEYWORDS",
        "prev": string | null,
        "new": string
      },
      ...
    ]
    ```

- **Example**:
  - **Request**:
    ```
    GET /page-improvements/6511bfe4-44c9-43c1-b4e2-b14b372f43ba
    ```
  - **Response**:
    ```json
    [
      {
        "id": "e01dfea3-20da-4829-af7d-62e3e35597aa",
        "path": "/",
        "type": "TITLE",
        "prev": "Home - Dewy Cases",
        "new": "Dewy Cases - Stylish Phone Cases"
      },
      {
        "id": "7e597aee-3514-4d8b-9214-06c824ccf8d8",
        "path": "/",
        "type": "DESCRIPTION",
        "prev": null,
        "new": "Protect your iPhone in style with Dewy Cases. Shop the latest Summer '24 Fruit Collection for premium design and durability."
      }
    ]
    ```

### 2. Update Improvement

- **Endpoint**: `/page-improvements/:id`
- **Method**: POST
- **Description**: Update a specific page improvement.
- **Path Parameters**:
  - `id` (string) - The ID of the improvement object to update.
- **Request Body**:
  - **Content Type**: application/json
  - **Body**:
    ```json
    "Updated value for improvement object's `new` field as a string"
    ```
- **Responses**:

  - **Status Code**: 200
    - **Content Type**: application/json
    - **Body**:
      ```json
      {
        "message": "Improvement object updated"
      }
      ```
  - **Status Code**: 400
    - **Content Type**: application/json
    - **Body**:
      ```json
      {
        "message": "Body must be a string"
      }
      ```
  - **Status Code**: 404
    - **Content Type**: application/json
    - **Body**:
      ```json
      {
        "message": "Improvement object not found"
      }
      ```

- **Example**:
  - **Request**:
    ```
    POST /page-improvements/e01dfea3-20da-4829-af7d-62e3e35597aa
    ```
    ```json
    "Dewy Cases - Trendy Phone Cases"
    ```
  - **Response**:
    ```json
    {
      "message": "Improvement object updated"
    }
    ```

Good luck with your interview! 🚀
