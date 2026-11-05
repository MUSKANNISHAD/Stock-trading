import React, { useState } from "react";

export default function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedApp, setSelectedApp] = useState(null);

  const apps = [
    {
      id: 1,
      name: "Stock Screener",
      description:
        "Discover stocks based on price, performance, and market trends.",
      category: "Trading",
      icon: "🔎",
      color: "#eef2ff",
      tag: "Popular",
    },
    {
      id: 2,
      name: "Market Heatmap",
      description:
        "Visualize market performance and identify top gainers and losers.",
      category: "Trading",
      icon: "🌡️",
      color: "#fff1e8",
      tag: "Market",
    },
    {
      id: 3,
      name: "Portfolio Analytics",
      description:
        "Track your investments, returns, and portfolio allocation.",
      category: "Portfolio",
      icon: "📊",
      color: "#e8f7ef",
      tag: "Portfolio",
    },
    {
      id: 4,
      name: "Profit & Loss Calculator",
      description:
        "Calculate potential profits, losses, and returns before trading.",
      category: "Portfolio",
      icon: "🧮",
      color: "#f3eaff",
      tag: "Calculator",
    },
    {
      id: 5,
      name: "Price Alerts",
      description:
        "Keep track of important price levels for your favorite stocks.",
      category: "Trading",
      icon: "🔔",
      color: "#fff8dc",
      tag: "Watchlist",
    },
    {
      id: 6,
      name: "Investment Calculator",
      description:
        "Estimate how your investments could grow over time.",
      category: "Portfolio",
      icon: "📈",
      color: "#e8f5ff",
      tag: "Calculator",
    },
    {
      id: 7,
      name: "IPO Center",
      description:
        "Explore upcoming IPOs and discover new investment opportunities.",
      category: "Research",
      icon: "🏢",
      color: "#fce8ef",
      tag: "Research",
    },
    {
      id: 8,
      name: "Market Calendar",
      description:
        "Stay informed about market events and important trading dates.",
      category: "Research",
      icon: "📅",
      color: "#e9f7f5",
      tag: "Research",
    },
  ];

  const categories = ["All", "Trading", "Portfolio", "Research"];

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(search.toLowerCase()) ||
      app.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || app.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div
      style={{
        padding: "35px",
        background: "#ffffff",
        minHeight: "100%",
        fontFamily: "Inter, Segoe UI, sans-serif",
        color: "#424242",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "26px",
              fontWeight: "500",
              margin: "0 0 8px",
            }}
          >
            Trading Apps
          </h2>

          <p
            style={{
              color: "#999",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Discover tools to make smarter trading decisions.
          </p>
        </div>

        <span
          style={{
            background: "#f5f7fa",
            padding: "9px 15px",
            borderRadius: "6px",
            fontSize: "13px",
            color: "#666",
          }}
        >
          {apps.length} Apps Available
        </span>
      </div>

      {/* Search */}
      <div style={{ marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="🔎  Search apps, tools, calculators..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "450px",
            padding: "14px 16px",
            border: "1px solid #e5e5e5",
            borderRadius: "8px",
            outline: "none",
            fontSize: "14px",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Categories */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: "9px 18px",
              borderRadius: "6px",
              border:
                activeCategory === category
                  ? "1px solid #387ed1"
                  : "1px solid #e5e5e5",
              background:
                activeCategory === category ? "#387ed1" : "#ffffff",
              color: activeCategory === category ? "#ffffff" : "#666",
              cursor: "pointer",
              fontSize: "13px",
              transition: "0.2s",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Apps Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredApps.map((app) => (
          <div
            key={app.id}
            style={{
              border: "1px solid #eaeaea",
              borderRadius: "12px",
              padding: "22px",
              background: "#ffffff",
              transition: "0.2s",
              display: "flex",
              flexDirection: "column",
              minHeight: "210px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#b8c9e8";
              e.currentTarget.style.boxShadow =
                "0 5px 20px rgba(0,0,0,0.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#eaeaea";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Icon and tag */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "10px",
                  background: app.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "23px",
                }}
              >
                {app.icon}
              </div>

              <span
                style={{
                  fontSize: "11px",
                  color: "#888",
                  background: "#f7f7f7",
                  padding: "5px 9px",
                  borderRadius: "5px",
                }}
              >
                {app.tag}
              </span>
            </div>

            {/* App information */}
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "600",
                margin: "0 0 10px",
                color: "#333",
              }}
            >
              {app.name}
            </h3>

            <p
              style={{
                fontSize: "13px",
                lineHeight: "1.6",
                color: "#888",
                margin: "0 0 22px",
              }}
            >
              {app.description}
            </p>

            {/* Button */}
            <button
              onClick={() => setSelectedApp(app)}
              style={{
                marginTop: "auto",
                width: "100%",
                padding: "11px",
                background: "#387ed1",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: "500",
              }}
            >
              Open App →
            </button>
          </div>
        ))}
      </div>

      {/* No results */}
      {filteredApps.length === 0 && (
        <div
          style={{
            textAlign: "center",
            padding: "60px 20px",
            color: "#999",
          }}
        >
          <h3>No apps found</h3>
          <p>Try searching with a different keyword.</p>
        </div>
      )}

      {/* Temporary app modal */}
      {selectedApp && (
        <div
          onClick={() => setSelectedApp(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              padding: "35px",
              width: "100%",
              maxWidth: "400px",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          >
            <div style={{ fontSize: "45px", marginBottom: "15px" }}>
              {selectedApp.icon}
            </div>

            <h2 style={{ fontSize: "21px", margin: "0 0 12px" }}>
              {selectedApp.name}
            </h2>

            <p
              style={{
                color: "#888",
                fontSize: "14px",
                lineHeight: "1.7",
              }}
            >
              {selectedApp.description}
            </p>

            <div
              style={{
                background: "#f5f7fa",
                padding: "12px",
                borderRadius: "8px",
                color: "#777",
                fontSize: "13px",
                margin: "20px 0",
              }}
            >
              🚧 This tool is coming soon!
            </div>

            <button
              onClick={() => setSelectedApp(null)}
              style={{
                width: "100%",
                padding: "12px",
                background: "#387ed1",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
