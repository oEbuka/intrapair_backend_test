const moment = require('moment');
exports.Dates = (req, res) => {
    const pickupDay = req.body.pickup_day;
    const recurrence = req.body.recurrence;
    const startDate = moment().startOf('day');
    let pickupDates = [];
  
    // Validate input
    if (!pickupDay || !recurrence) {
      return res.status(400).json({ error: 'pickup_day and recurrence are required' });
    }
  
    // Get the next pickup date
    let nextPickupDate = moment(startDate);
    while (nextPickupDate.format('dddd') !== pickupDay) {
      nextPickupDate.add(1, 'day');
    }
  
    // Generate pickup dates
    for (let i = 0; i < recurrence; i++) {
      pickupDates.push({
        date: nextPickupDate.toISOString(),
        readable_date: nextPickupDate.format('D MMMM YYYY')
      });
      nextPickupDate.add(7, 'days');
    }
  
    return res.json({ pickup_dates: pickupDates });
  }

