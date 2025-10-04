

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './GiftDetails.css';

const GiftDetails = () => {
    const [gift, setGift] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchGiftById = async () => {
            try {
                const response = await fetch(`/gifts/${id}`);
                if (!response.ok) {
                    throw new Error('Gift not found');
                }
                const data = await response.json();
                setGift(data);
            } catch (err) {
                console.error('Error fetching gift details:', err);
                setGift(null);
            }
        };
        fetchGiftById();
    }, [id]);

    return (
        <div className="GiftDetails">
            <main id="gift-content" className="gift-info">
                {gift ? (
                    <>
                        <div className="image-container">
                            <img id="image" src={gift.image} alt={gift.name} />
                        </div>
                        <div className="gift-details">
                            <h2 id="name">{gift.name}</h2>
                            <p id="submittedBy">{'Submitted By: ' + gift.submittedBy}</p>
                            <p id="pricePoint">{'Price: ' + gift.pricePoint}</p>
                            <p id="audience">{'Great For: ' + gift.audience}</p>
                            <p id="description">{gift.description}</p>
                        </div>
                    </>
                ) : (
                    <h2 style={{textAlign: 'center', marginTop: '2rem'}}>Gift not found.</h2>
                )}
            </main>
        </div>
    );
};

export default GiftDetails;