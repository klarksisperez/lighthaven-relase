import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
  	author: { type: String, required: true },
	  genre: { type: String, required: true },
    image: { type: String, required: true },
    textfile: { type: String, required: true },
    description: { type: String, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numreview: { type: Number, required: true },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;