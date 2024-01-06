# Data Structure

```mermaid
erDiagram
    USER {
        uuid uuid PK
        datetime created_at
        string first_name
        string last_name
        string email
        string password_hash
        string hash_function
    }

    CLAIM {
        uuid uuid PK
        string title
        string shortened_title
        string explanation
        Claim[] claims
        Source[] sources
        Definition[] definitions
    }

    SOURCE {
        uuid uuid PK
        string doi UK
        string type
        string citation
        Source[] sources
    }

    DEFINITION {
        uuid created_by_user FK
        string language PK
        string dialect UK
        string defined_word PK
        string definition PK
    }

    HISTORY_ENTRY {}

    USER }o--|| HISTORY_ENTRY : "archived by"
    USER }o--|| CLAIM : created
    CLAIM }o--|| HISTORY_ENTRY : "archived by"
    SOURCE }o--|| HISTORY_ENTRY : "archived by"
    CLAIM }o--o{ DEFINITION : "defined by"
    CLAIM }o--o{ CLAIM : "referenced by"
    CLAIM }o--o{ SOURCE : "backed by"
    SOURCE }o--o{ SOURCE : "backed by"
```
