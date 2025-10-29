/**
 * Retrieves a list of characters from the characters.json file.
 * @returns {Promise<Object>} A promise that resolves to an object containing the characters data.
 */

import characters from '@/data/characters.json'
import { NextResponse } from 'next/server'

// export async function GET() {
//   return NextResponse.json({ characters: characters.data })
// }


export async function GET(req, { params }) {
  try {
    const character = characters.data.find(item => item.slug === params.slug)

    if (!character) {
      return new NextResponse('not found', { status: 404 })
    }

    const character_qoutes = qoutes.data.filter(
      item => item.character_id === character.id,
    )

    return NextResponse.json({
      character,
      character_qoutes: character_qoutes.length > 0 ? character_qoutes : null,
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}