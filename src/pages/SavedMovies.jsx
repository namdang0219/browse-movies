import { MovieItem2 } from "components/movie";
import { useAuth } from "contexts/auth-context";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "firebaseConfig";
import { ListLarge } from "modules/listLarge";
import React, { useState } from "react";
import { useEffect } from "react";

const SavedMovies = () => {
  const {currentUser} = useAuth()
  const [savedMovies, setSavedMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		const getSavedMovies = async () => {
			try {
        setIsLoading(true)
				const docRef = doc(db, "users", currentUser?.uid);
				onSnapshot(docRef, (doc) => {
					setSavedMovies(doc.data()?.savedMovies);
				});
        setIsLoading(false)
			} catch (error) {
				console.log(error);
			}
		};
		getSavedMovies();
	}, [currentUser]);
  console.log(savedMovies)
	return (
		<ListLarge>
			{savedMovies.length > 0 &&
				savedMovies.map((item) => (
					<MovieItem2
						key={item}
						movieId={item}
						loading={isLoading}
					></MovieItem2>
				))}
		</ListLarge>
	);
};

export default SavedMovies;
