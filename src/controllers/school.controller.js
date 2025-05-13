import { insertSchool,getAllSchools } from "../models/school.model.js";

console.log("controller working")
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const toRad = (val) => (val * Math.PI) / 180;
  const R = 6371; 
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

export const addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ error: 'All fields are required and must be valid.' });
  }

  try {
    const id = await insertSchool(name, address, latitude, longitude);
    res.status(201).json({ message: '✅ School added', id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const listSchools = async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLon = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLon)) {
    return res.status(400).json({ error: 'Latitude and longitude are required and must be numbers.' });
  }

  try {
    const schools = await getAllSchools();

    const sorted = schools
      .map((school) => ({
        ...school,
        distance: calculateDistance(userLat, userLon, school.latitude, school.longitude),
      }))
      .sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
