import React from 'react'
import { TextField } from '@material-ui/core';

export const Input = ({ label, register, name, error, helperText, ...rest }) =>     {
    return (
        <>
            <TextField
                id="outlined-username"
                label={label} 
                variant="outlined"
                margin="normal"
                size="small"
                fullWidth
                style={{
                  background: "var(--grey-2)",
                  color: "var(--color-text)",
                  opacity: " 0.7",
                }}
                {...register(name)}
                error={error}
                helperText={helperText}
                {...rest}
              />    
        </>
    )
};
