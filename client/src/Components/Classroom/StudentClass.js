import React from 'react'
import { useParams } from 'react-router-dom'

export default function StudentClass() {
    const { id } = useParams()
    return (
        <div>
            { id }
        </div>
    )
}