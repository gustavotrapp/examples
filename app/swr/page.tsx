"use client";

import useSWR from "swr";

const fetcher = (key: string) =>
  fetch(key).then(async (response) => await response.json());

export default function Page() {
  const { data, error, isLoading } = useSWR("/api/data", fetcher);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Erro ao fazer o fetch</div>;
  return <div>{data}</div>;
}
