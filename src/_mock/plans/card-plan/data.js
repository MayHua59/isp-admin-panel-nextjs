const cardPlans = [
  {
    "id": 1,
    "plan_name": "Prepaid 10GB",
    "data_gb": 10,
    "validity_days": 30,
    "price": 15.00,
    "description": "10GB data, 30-day validity. Ideal for light users.",
    "created_at": "2025-07-10T09:00:00Z"
  },
  {
    "id": 2,
    "plan_name": "Unlimited Weekend",
    "data_gb": "Unlimited",
    "validity_days": 2, // Friday evening to Sunday night
    "price": 8.00,
    "description": "Unlimited data for weekend browsing and streaming.",
    "created_at": "2025-07-11T10:00:00Z"
  },
  {
    "id": 3,
    "plan_name": "Traveler's Pack 5GB",
    "data_gb": 5,
    "validity_days": 7,
    "price": 12.50,
    "description": "5GB data for 7 days. Perfect for short trips.",
    "created_at": "2025-07-12T11:00:00Z"
  },
  {
    "id": 4,
    "plan_name": "Student Saver 20GB",
    "data_gb": 20,
    "validity_days": 30,
    "price": 20.00,
    "description": "20GB data for students, monthly validity.",
    "created_at": "2025-07-13T12:00:00Z"
  },
  {
    "id": 5,
    "plan_name": "Mega Data 50GB",
    "data_gb": 50,
    "validity_days": 30,
    "price": 35.00,
    "description": "High data volume for heavy internet usage.",
    "created_at": "2025-07-14T13:00:00Z"
  },
  {
    "id": 6,
    "plan_name": "Prepaid 2GB (Daily)",
    "data_gb": 2,
    "validity_days": 1,
    "price": 2.00,
    "description": "2GB data, 24-hour validity. Daily top-up.",
    "created_at": "2025-07-15T14:00:00Z"
  },
  {
    "id": 7,
    "plan_name": "Business Connect",
    "data_gb": "100GB",
    "validity_days": 30,
    "price": 60.00,
    "description": "Business-grade data plan with high volume.",
    "created_at": "2025-07-16T15:00:00Z"
  },
  {
    "id": 8,
    "plan_name": "Family Share 30GB",
    "data_gb": 30,
    "validity_days": 30,
    "price": 30.00,
    "description": "Shareable data for family members.",
    "created_at": "2025-07-17T16:00:00Z"
  },
  {
    "id": 9,
    "plan_name": "Lite Browsing 5GB",
    "data_gb": 5,
    "validity_days": 15,
    "price": 7.50,
    "description": "Affordable plan for basic browsing and messaging.",
    "created_at": "2025-07-18T17:00:00Z"
  },
  {
    "id": 10,
    "plan_name": "Night Owl Unlimited",
    "data_gb": "Unlimited (Night)",
    "validity_days": 30,
    "price": 10.00,
    "description": "Unlimited data for use during off-peak hours (e.g., 12 AM - 6 AM).",
    "created_at": "2025-07-19T18:00:00Z"
  }
];
export default cardPlans;