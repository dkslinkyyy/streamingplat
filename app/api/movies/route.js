import clientPromise from "../../../utils/mongodb";


import { NextResponse } from 'next/server';

export async function GET(req){
  try {
    const client = await clientPromise;
    const db = client.db("moviesDB");
    const allMovies = await db.collection("movies").find({}).toArray();
    
    return NextResponse.json({ status: 200, data: allMovies });
  } catch (err) {
    return NextResponse.json({ message: 'Internal server error' })
  }
}