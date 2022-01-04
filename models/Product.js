import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, enum: ['guitar', 'piano', 'drum'], required: true },
  price: { type: Number, min: 0, required: true },
  description: { type: String, required: true },
  features: [{ type: String }], //List of features for the product
  featured: { type: Boolean, required: true }, // Determines if product is shown in the landing page
  photos: [{ type: String }], //List with the paths for the images of the product
});

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
