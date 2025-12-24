// TEMP MOCK SUPABASE CLIENT (MIGRATION PHASE)

export const supabase: any = {
  from: () => ({
    select: () => Promise.resolve({ data: [], error: null }),
    insert: () => Promise.resolve({ data: null, error: null }),
    update: () => Promise.resolve({ data: null, error: null }),
    delete: () => Promise.resolve({ data: null, error: null }),
    eq: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
    }),
    order: () => Promise.resolve({ data: [], error: null }),
  }),
  auth: {
    getUser: async () => ({ data: { user: null } }),
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe() {} } },
    }),
  },
};
