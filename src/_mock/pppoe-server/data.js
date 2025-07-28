const pppoeServers = [
  {
    "id": 1,
    "name": "Main Server 01",
    "ip_address": "192.168.1.1",
    "port": 1701,
    "location": "Central Office A",
    "description": "Primary PPPoE server for city center.",
    "created_at": "2025-06-01T10:00:00Z",
    "updated_at": "2025-06-01T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Backup Server 01",
    "ip_address": "192.168.1.2",
    "port": 1701,
    "location": "Central Office A",
    "description": "Backup PPPoE server for city center.",
    "created_at": "2025-06-01T10:05:00Z",
    "updated_at": "2025-06-01T10:05:00Z"
  },
  {
    "id": 3,
    "name": "Branch Office B Server",
    "ip_address": "10.0.0.1",
    "port": 1701,
    "location": "Branch Office B",
    "description": "PPPoE server for Branch Office B.",
    "created_at": "2025-06-02T11:30:00Z",
    "updated_at": "2025-06-02T11:30:00Z"
  },
  {
    "id": 4,
    "name": "Remote Site C Server",
    "ip_address": "172.16.0.1",
    "port": null,
    "location": "Remote Site C",
    "description": "PPPoE server for Remote Site C, no specific port configured.",
    "created_at": "2025-06-03T14:15:00Z",
    "updated_at": "2025-06-03T14:15:00Z"
  },
  {
    "id": 5,
    "name": "Test Server Lab",
    "ip_address": "192.168.100.10",
    "port": 1701,
    "location": "Lab Environment",
    "description": "Server used for testing and development.",
    "created_at": "2025-06-04T09:00:00Z",
    "updated_at": "2025-06-04T09:00:00Z"
  },
  {
    "id": 6,
    "name": "Data Center East",
    "ip_address": "203.0.113.5",
    "port": 1701,
    "location": "East Data Center",
    "description": "High-capacity server for eastern region clients.",
    "created_at": "2025-06-05T15:20:00Z",
    "updated_at": "2025-06-05T15:20:00Z"
  },
  {
    "id": 7,
    "name": "Data Center West",
    "ip_address": "203.0.113.6",
    "port": 1701,
    "location": "West Data Center",
    "description": "High-capacity server for western region clients.",
    "created_at": "2025-06-06T08:40:00Z",
    "updated_at": "2025-06-06T08:40:00Z"
  },
  {
    "id": 8,
    "name": "Small Office Server 1",
    "ip_address": "192.168.50.1",
    "port": null,
    "location": "Small Office 1",
    "description": "Local server for a small office branch.",
    "created_at": "2025-06-07T12:00:00Z",
    "updated_at": "2025-06-07T12:00:00Z"
  },
  {
    "id": 9,
    "name": "VPN Concentrator",
    "ip_address": "198.51.100.10",
    "port": 1723,
    "location": "Main Data Center",
    "description": "PPTP VPN server for remote access.",
    "created_at": "2025-06-08T09:10:00Z",
    "updated_at": "2025-06-08T09:10:00Z"
  },
  {
    "id": 10,
    "name": "DMZ Server",
    "ip_address": "192.0.2.20",
    "port": 1701,
    "location": "DMZ Network",
    "description": "Server in demilitarized zone for specific services.",
    "created_at": "2025-06-09T17:00:00Z",
    "updated_at": "2025-06-09T17:00:00Z"
  }
]
export default pppoeServers;