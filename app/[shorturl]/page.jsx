import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {

    const { shorturl } = await params
    // check if have url for this url in db
    
    const client = await clientPromise;
    const db = client.db("URLshortner")
    const collection = db.collection("url")

    const doc =await collection.findOne({ shorturl: shorturl })
    if (doc) {
        // return Response.json({ error: true, message: "URL Already exists" })
        redirect(doc.url);
    }
    else{
        redirect(`${process.env.NEXT_PUBLIC_HOST}/`)
    }

    return <div>My Post: </div>
}
