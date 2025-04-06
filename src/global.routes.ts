const routes = {
  LOGIN: "/",
  DASHBOARD: "/dashboard",
  MENU: {
    INDEX: "menu",
    PRODUCTS: {
      INDEX: "products",
      CREATE: "create",
    },
    CATEGORIES: {
      INDEX: "categories",
      DETAIL: (id: string = ":id") => `detail/${id}`,
      CREATE: "create",
      EDIT: (id: string = ":id") => `edit/${id}`,
    },
    SIDE_ORDERS: {
      INDEX: "side-orders",
      CREATE: "create",
    },
    ADD_ONS: {
      INDEX: "add-ons",
      CREATE: "create",
    },
    SPECIAL_OFFERS: {
      INDEX: "special-offers",
      CREATE: "create",
    },
  },
  BRANCH: {
    INDEX: "branch",
    CONTACT_INFORMATION: {
      INDEX: "contact-information",
    },
    ALL_STAFF: {
      INDEX: "all-staff",
    },
    ALL_ASSETS: {
      INDEX: "all-assets",
    },
  },
  BANNER: {
    INDEX: "banner",
    CREATE: "create",
  },
  ORDERMANAGEMENT: {
    INDEX: "order-management",
    NEWORDER: {
      INDEX: "new-orders",
    },
    APPROVEDORDER: {
      INDEX: "approved-orders",
    },
    REJECTEDORDER: {
      INDEX: "rejected-orders",
    },
  },
  TICKETMANAGEMENT: {
    INDEX: "tick-management",
    FINANCIALASSISTANCE: {
      INDEX: "financial-assistance",
    },
  },
  CUSTOMERMANAGEMENT: {
    INDEX: "customer-management",
    CREATE: "create",
  },
} as const;

export default routes;
