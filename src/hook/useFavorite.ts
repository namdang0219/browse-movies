import { db } from "firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import { setFavorite } from "store/userMovie/userMovieSlice";

export const useFavorite = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { user } = useSelector((state: RootState) => state.user);

	useEffect(() => {
		const unsub = onSnapshot(
			doc(db, "userData", String(user?.uid)),
			(doc) => {
				if (doc.exists()) {
					dispatch(setFavorite(doc.data().favorite));
				} else {
					console.log("No such document!");
				}
			}
		);

		return () => unsub();
	}, [dispatch, user]);
};
