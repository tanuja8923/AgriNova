# AgriNova — Technical Design Document

## 1. Overview

AgriNova is a proposed smart farm waste-to-value platform that aims to help farmers identify useful applications for agricultural residue and connect them with potential industries and collection partners.

The current project is a frontend prototype. Backend services, persistent database storage, automated matching, and production deployment are planned enhancements unless separately implemented and verified.

## 2. Objectives

- Make agricultural-waste submission simple.
- Help users explore suitable residue utilization options.
- Estimate potential net value after applicable costs.
- Support coordination between farmers, industries, and transporters.
- Encourage alternatives to agricultural-residue burning.
- Provide a foundation for future waste-batch traceability.

## 3. Intended Users

### Farmer
Submits the type and approximate quantity of available agricultural residue, along with location and other relevant details.

### Industry or Buyer
Would specify residue requirements, acceptable quantities, and collection preferences.

### Transporter
Would help coordinate collection and delivery.

### Administrator
Would manage platform records and support coordination in a future backend-enabled version.

## 4. Proposed Architecture

```text
+--------------------------------+
|          Platform Users        |
| Farmer | Industry | Transporter|
+---------------+----------------+
                |
                v
+--------------------------------+
|         Web Frontend           |
|       HTML, CSS, JavaScript    |
+---------------+----------------+
                |
                v
+--------------------------------+
|     Planned Backend API        |
|       Node.js / Express        |
+---------------+----------------+
                |
                v
+--------------------------------+
|     Planned Database Layer     |
|         MongoDB Atlas          |
+---------------+----------------+
                |
                v
+--------------------------------+
| Planned Business Services      |
| Utilization | Value Estimation |
| Matching | Collection | QR ID  |
+--------------------------------+
```

**Status:** The frontend represents the current prototype. The backend, database layer, and business services shown above describe the proposed future architecture and must not be considered operational until implemented and tested.

## 5. Technology Stack

### Current prototype
- HTML5 for page structure
- CSS3 for layout and styling
- JavaScript for client-side interactions

### Planned components
- Node.js and Express.js for backend APIs
- MongoDB Atlas for persistent storage
- Web Speech API for voice input where supported
- Leaflet and OpenStreetMap for map visualization
- QR-code generation for waste-batch identification

## 6. Proposed Data Flow

1. A farmer enters waste type, approximate quantity, and location.
2. The interface validates required fields.
3. In a future backend-enabled version, the submission will be sent to an API.
4. The backend will validate and store the record.
5. Recommendation logic will identify possible utilization options.
6. Value estimation will consider expected revenue and applicable costs.
7. Matching logic will compare the submission with buyer requirements.
8. Collection and delivery details will be coordinated.
9. A batch identifier may be used for traceability.

Steps involving backend storage, automated recommendations, matching, and delivery coordination are planned until implemented.

## 7. Proposed Data Model

### WasteSubmission
- `id`: unique record identifier
- `farmerId`: farmer identifier, when authentication is available
- `wasteType`: agricultural residue category
- `quantity`: approximate available quantity
- `unit`: measurement unit, such as kg or tonne
- `location`: user-provided or permitted location details
- `createdAt`: submission timestamp
- `status`: record status

### IndustryRequirement
- `id`: unique requirement identifier
- `industryName`: buyer or industry name
- `wasteType`: required residue category
- `quantityRequired`: required quantity
- `location`: preferred collection area
- `status`: requirement status

These are proposed logical models, not confirmation of existing database collections.

## 8. Net Value Estimation

The proposed calculation is:

**Net Value = Expected Revenue − Transport Cost − Handling Cost − Other Applicable Costs**

All inputs should be clearly identified as estimates unless verified. If costs or market prices are unavailable, the platform should indicate that the value cannot be reliably estimated.

## 9. Validation and Error Handling

The frontend should check that:
- Required fields are completed.
- Quantity is a positive number.
- The measurement unit is selected.
- Invalid inputs receive clear error messages.
- Unimplemented functionality is not presented as a successful transaction.

Future APIs should validate requests on the server as well as on the client.

## 10. Security and Privacy

Future backend development should:
- Store credentials in environment variables.
- Never expose database passwords or API keys in frontend code.
- Validate and sanitize user inputs.
- Add appropriate authentication and authorization.
- Limit access to personal and location data.
- Use HTTPS for deployed services.
- Avoid committing `.env` files or secrets to version control.

## 11. Testing Strategy

The project should be tested for:
- Page loading and navigation
- Form validation
- Invalid and missing input handling
- Responsive layouts
- Accessibility and understandable messages
- API validation once backend services exist
- Database operations once integration is implemented
- Matching and value calculations once those features exist

Test results should be documented only after execution.

## 12. Limitations

The current prototype does not imply that backend APIs, persistent database storage, verified industry listings, automated recommendations, or live transport services are available. These require further development, testing, and reliable data sources.

## 13. Future Enhancements

- User authentication and role-based access
- Backend and database integration
- Industry-demand matching
- Cost-aware value estimation
- Voice-assisted multilingual forms
- Map-based collection coordination
- QR-based waste-batch traceability
- Analytics for waste utilization and environmental outcomes
