import dbConnect from '../../database/dbConnect';
import Product from '../../models/Product';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        //   const pets = await Pet.find({}) /* find all the data in our database */
        res.status(200).send('this is going swell');
      } catch (error) {
        res.status(400).send('there was an error');
      }
      break;
    case 'POST':
      try {
        const product = await Product.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: product });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
