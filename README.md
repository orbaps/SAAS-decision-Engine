# Remix: SaaS Decision Engine

A deterministic analysis platform for SaaS inventory utilization and cost optimization recommendations based on multi-variable telemetry data.

## Overview

The **Remix: SaaS Decision Engine** acts as a unified command center designed to aggregate, analyze, and optimize software expenditures across an organization. Through a brutalist, data-dense interface, it provides actionable insights into software utilization, fleet management, departmental topology, and highly accurate AI-driven expenditure forecasts.

## Key Features

1.  **Command Dashboard:** High-level telemetry of the platform's state, surfacing recent "Decision Engine" audit triggers, license operations (keep, downgrade, remove), confidence scores, and real-time alerts.
2.  **Inventory Fleet Management:** A comprehensive register displaying all active SaaS software nodes, categorized by specific domains, including fiscal values, asset owners, and renewal expirations.
3.  **Departmental Topology:** Analysis detailing workforce software allocation across different operational units. Tracks active seats, unit expenditure, and calculates a utilization efficiency metric. Includes search/filter capability across units.
4.  **Telemetry Engine (Analytics):** Visualizations indicating global operational cost distributions and a multi-variable scatter plot matrix mapping cost against utilization for every software tool in the fleet.
5.  **Predictive Modeling (Forecasting):** AI-driven projections comparing baseline current-run-rate spend against optimized expenditure. Surfaces specific cost optimization drivers (e.g., license reclaim, vendor consolidation) vs risk assumptions.
6.  **Decision Audit:** A searchable and filterable chronological log tracking every optimization directive executed by the engine, including node ID, protocol, and confidence scores.
7.  **User Details Metadata:** A detailed breakdown displaying the tool inventory, recommendations, identities, system ownerships, and metadata associated with specific individuals to execute targeted interventions.

## Architecture

*   **Frontend Framework:** React 19.
*   **Build Tool:** Vite.
*   **Styling:** Tailwind CSS (v4) with a highly custom, tech-forward, and brutalist configuration (JetBrains Mono for data/logs, Space Grotesk for display headers, strong contrasts).
*   **Routing:** React Router DOM (v7).
*   **Data Visualization:** Recharts (Scatter, Area, Bar chart integrations).
*   **Icons:** Lucide React.
*   **Responsive Design:** Implemented fully responsive grid structures and mobile menus.

## Getting Started

### Prerequisites

Ensure you have Node.js (v20 or higher recommended) installed.

### Installation

1.  Clone the repository or download the source code.
2.  Install dependencies:

```bash
npm install
```

### Development

Start the Vite development server:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:3000` or `http://localhost:5173`.

### Production Build

Create an optimized build for production:

```bash
npm run build
```

This will generate static files in the `dist` directory, which can be deployed to any static web hosting service.

## Environment Variables

A `.env.example` file is provided in the root directory.

```
GEMINI_API_KEY="MY_GEMINI_API_KEY"
APP_URL="MY_APP_URL"
```

*   `GEMINI_API_KEY`: Used by AI Studio at runtime to enable advanced telemetry features or intelligent querying capabilities.
*   `APP_URL`: Determines the root callback or root host utilized by the platform.

## Design Philosophy

The interface utilizes a "dark-mode only", data-dense aesthetic. Key principles include:

*   **Typography:** Clear distinction between data (Mono), labels (Sans), and structural hierarchies (Display).
*   **Brutalism:** Hard lines, visible grid borders, and minimal radii.
*   **Status Colors:** Uses distinct color treatments for action states:
    *   `#F27D26` (Primary Orange)
    *   `#4ade80` (Status Keep - Green)
    *   `#f87171` (Status Remove - Red)
    *   `#fbbf24` (Status Downgrade - Yellow)

## License

SPDX-License-Identifier: Apache-2.0
