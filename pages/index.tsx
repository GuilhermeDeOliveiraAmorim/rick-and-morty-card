import { Pagination } from "@mui/material";
import { useRouter } from "next/router";
import { SetStateAction, useEffect, useState } from "react";
import { useQuery } from "react-query";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [page, setPage] = useState<number | undefined>(1);

  const router = useRouter();

  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json()),
    {
      keepPreviousData: true,
    }
  );

  function handlePaginationChange(
    e: any,
    value: SetStateAction<number | undefined>
  ) {
    setPage(value);
  }

  useEffect(() => {
    if (router.query.page) {
      setPage(router.query.page);
    }
  }, [router.query.page]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center p-10 bg-green-800">
        <h1 className="text-white">
          Rick and Morty with React Query and Pagination
        </h1>
      </div>

      <div className="flex justify-center p-10">
        <Pagination
          count={data?.info.pages}
          variant="outlined"
          color="primary"
          className="pagination"
          page={page}
          onChange={handlePaginationChange}
        />
      </div>

      <div>
        <div className="grid-container">
          {data?.results?.map((character: any) => (
            <article key={character.id}>
              <img
                src={character.image}
                alt={character.name}
                height={200}
                loading="lazy"
                width={200}
              />
              <div className="text">
                <p>Name: {character.name}</p>
                <p>Lives in: {character.location.name}</p>
                <p>Species: {character.species}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
