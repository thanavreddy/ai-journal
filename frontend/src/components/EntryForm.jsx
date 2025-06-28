import React, { useState } from 'react'
import { TextField, Button, Box } from '@mui/material'
import axios from 'axios'

const EntryForm = () => {
  const [text, setText] = useState('')

  const handleSubmit = async () => {
    if (!text.trim()) return
    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000'
    await axios.post(`${apiUrl}/entry`, { text })
    setText('')
    window.location.reload()
  }

  return (
    <Box mb={4}>
      <TextField
        label="Write your thoughts..."
        multiline
        fullWidth
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        sx={{ mt: 2 }}
      >
        Save Entry
      </Button>
    </Box>
  )
}

export default EntryForm
