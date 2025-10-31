'use client'
import Chip from '@mui/material/Chip'

export default function TagChip({
  label,
  selected = false,
  disabled = false,
  onClick,
}) {
  return (
    <Chip
      label={label}
      color={selected ? 'primary' : 'default'}
      variant={selected ? 'filled' : 'outlined'}
      disabled={disabled}
      onClick={onClick}
      sx={{ mr: 1, mb: 1, borderRadius: '16px' }}
      aria-pressed={selected}
    />
  )
}
