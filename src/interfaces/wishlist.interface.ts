/**
 * Title: Wishlist Interface
 * Description: This Interface is for user's wishlist items
 * Author: Nurul Islam Rimon
 * Date: 2024-03-16 11:58:42
 */

import mongoose, { Model } from "mongoose";

export interface IWishlist extends mongoose.Document {
	userId: mongoose.Types.ObjectId;
	products: {
		productName: string;
		brandName: string;
		productPhoto: string;
		productId: mongoose.Types.ObjectId;
	}[];
}

export interface IWishlistModel extends Model<IWishlist> {
	findAWishlistWithVariantPopulate(
		query: Record<string, unknown>
	): Promise<IWishlist>;
}
