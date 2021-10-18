import React from 'react'
import { Container, InputContainer } from './style';
import { TextField } from '@material-ui/core';

export const Input = ({ label, register, name, error, helperText, ...rest }) =>     {
    return (
        <div>
        <TextField
            id="outlined-username"
            label="Nome de usuário*"
            variant="outlined"
            margin="normal"
            size="small"
            style={{
              width: "295px",
              height: "50px",
              padding: "0px 15px",
              margin: "15px 0px",
              borderRadius: "8px",
              border: "none",
              background: "#f5f5f5",
              color: "var(--gray)",
              opacity: " 0.7",
            }}
            // {...register(name)}
            error={error}
            helperText={helperText}
            {...rest}
          />    
        </div>
    )
}

// {...register(name)}