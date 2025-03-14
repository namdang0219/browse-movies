import { db } from "firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { setFavorite } from "store/userMovie/userMovieSlice";

export const useFavorite = () => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, "userData", "492ku7m1TrkyqdBDLlWR"),
			(doc) => {
				if (doc.exists()) {
					dispatch(setFavorite(doc.data().favorite));
				} else {
					console.log("No such document!");
				}
			}
		);

		return () => unsub();
	}, [dispatch]);
};
