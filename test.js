
function calculateDeliveryFee(weight, area, quantity , distance, vehicletype) {
  
  const ratePerUnitWeight = 0.5; // Adjust this based on your specific pricing strategy
  const ratePerUnitarea = 0.5; // Adjust this based on your specific pricing strategy
  const ratePerUnitdistance = 0.5; // Adjust this based on your specific pricing strategy
  const baseprice = 0.5; // Adjust this based on your specific pricing strategy
  const vehicle = {
    'bike' : 100,
    'car' : 1000,
    'van' : 5000,
    'lorry' : 10000,
  }

  // weight fee
  const totalweight = weight * quantity
  const weightfee = totalweight * ratePerUnitWeight
  // area fee
  const totalarea = area * quantity
  const areafee = totalarea * ratePerUnitarea
  // distance fee
  const totaldistance = distance * quantity
  const distancefee = totaldistance * ratePerUnitdistance 

  //vehicle fee 
  const vehiclefee = vehicle[vehicletype]
  const deliveryFee = weightfee + areafee + distancefee + vehiclefee + baseprice
  const fee = Math.ceil(deliveryFee)
  return fee;
}

const x = calculateDeliveryFee(12, 23, 2, 50, 'car')

console.log('x', x)



