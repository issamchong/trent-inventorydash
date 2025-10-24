export const dashboardData = {
  totalInventory: 12560,
  inventoryTrend: -2.5, // percentage
  topItems: [
    { id: 'item-1', name: 'Micro-Controllers', quantity: 2500, imageId: 'microController' },
    { id: 'item-2', name: 'Resistor Kits', quantity: 1800, imageId: 'resistorKit' },
    { id: 'item-3', name: 'LED Pack', quantity: 1200, imageId: 'ledPack' },
  ],
  shipmentDelays: [
    { month: 'January', delays: 5 },
    { month: 'February', delays: 8 },
    { month: 'March', delays: 12 },
    { month: 'April', delays: 7 },
    { month: 'May', delays: 6 },
    { month: 'June', delays: 9 },
  ],
  inventoryHealthMetrics: {
    stockTurnover: 87,
    stockoutRate: 2,
    overstockPercent: 5,
    leadTimeAccuracy: 95,
    agingInventoryPercent: 10,
  }
};
