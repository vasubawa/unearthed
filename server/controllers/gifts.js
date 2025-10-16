import { pool } from "../db/db.js";

export const getGifts = async (request, response) => {
	try {
		const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
		response.status(200).json(results.rows);
	} catch (error) {
		response.status(409).json({ error: error.message });
	}
};

const createGift = async (req, res) => {
	try {
		const {
			name,
			pricepoint,
			audience,
			image,
			description,
			submittedby,
			submittedon,
		} = req.body;
		const results = await pool.query(
			`
          INSERT INTO gifts (name, pricepoint, audience, image, description, submittedby, submittedon)
          VALUES($1, $2, $3, $4, $5, $6, $7)
          RETURNING *`,
			[
				name,
				pricepoint,
				audience,
				image,
				description,
				submittedby,
				submittedon,
			]
		);

		res.status(201).json(results.rows[0]);
	} catch (error) {
		res.status(409).json({ error: error.message });
	}
};

const updateGift = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const {
			name,
			pricepoint,
			audience,
			image,
			description,
			submittedby,
			submittedon,
		} = req.body;
		const results = await pool.query(
			`
          UPDATE gifts SET name = $1, pricepoint = $2, audience = $3, image = $4, description = $5, submittedby = $6, submittedon= $7 WHERE id = $8`,
			[
				name,
				pricepoint,
				audience,
				image,
				description,
				submittedby,
				submittedon,
				id,
			]
		);
		res.status(200).json(results.rows[0]);
	} catch (error) {
		res.status(409).json({ error: error.message });
	}
};

const deleteGift = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const results = await pool.query("DELETE FROM gifts WHERE id = $1", [
			id,
		]);
		res.status(200).json(results.rows[0]);
	} catch (error) {
		res.status(409).json({ error: error.message });
	}
};



const getGiftById = async (req, res) => {
	try {
		const id = parseInt(req.params.giftId);
		const results = await pool.query('SELECT * FROM gifts WHERE id = $1', [id]);
		if (results.rows.length === 0) {
			return res.status(404).json({ error: 'Gift not found' });
		}
		res.status(200).json(results.rows[0]);
	} catch (error) {
		res.status(409).json({ error: error.message });
	}
};

export default {
	getGifts,
	getGiftById,
	createGift,
	updateGift,
	deleteGift
}