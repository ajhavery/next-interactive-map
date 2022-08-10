import storeAddresses from '../../data/store-addresses.json';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request
  } else if (req.method === 'GET') {
    // Process a GET request
    res.status(200).send({
      success: true,
      message: 'Successfully retrieved store addresses',
      pins: storeAddresses,
    });
  } else {
    // Handle any other HTTP method
  }
}
