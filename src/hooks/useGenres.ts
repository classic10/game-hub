import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";

export interface Genre {
    id: number,
    name: string,
    slug: string
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;