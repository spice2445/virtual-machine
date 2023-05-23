import { FormEvent, useCallback, useState } from 'react';

import { useContractRead } from 'wagmi';

import useAuth from 'shared/lib/use-auth';

import { toast } from 'react-toastify';

import {
  Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography
} from '@mui/material';

import { ethers } from 'ethers';

import { validationSchema } from '../../config/schema';
import { toastConfig, VMFunctions } from '../../config/const';

import cls from './style.module.scss';

interface ConnectFormProps {
    contractAddress: `0x${string}`;
    contractAbi: any;
    bscTestnet: { id: number };
  }

const hexlify = (number: number) => ethers.utils.hexlify(number);

export const ConnectForm = ({ contractAddress, contractAbi, bscTestnet }: ConnectFormProps) => {
  const [result, setResult] = useState<string>('');
  const { logout } = useAuth();
  const [numbers, setNumbers] = useState<number[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [VMFunction, setVMFunction] = useState<number>(0);

  const contractRead = useContractRead({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'execute',
    chainId: bscTestnet.id,
    enabled: false,
    onSuccess: (data: unknown[]) => {
      const parsedData = data.map((item) => parseInt(String(item), 10));
      const modifiedData = `[${parsedData.join(', ')}]`;
      setResult(modifiedData);
      toast.success('Transaction has been successfully finished!', toastConfig);
    },
    onError: (error) => {
      toast.error('Transaction was failed. Something went wrong.', toastConfig);
    },
    args: [numbers, hexlify(VMFunction)]
  });

  const execute = useCallback(() => {
    contractRead?.refetch();
  }, [contractRead]);

  const handleAddNumber = useCallback(async () => {
    try {
      const validatedInput = await validationSchema.validate({ number: inputValue });
      const newNumber = validatedInput.number;
      setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
      setInputValue('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  }, [inputValue]);

  const handleDeleteNumber = useCallback((index: number) => {
    setNumbers((prevNumbers) => prevNumbers.filter((_, i) => i !== index));
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      handleAddNumber();
    },
    [handleAddNumber]
  );

  const handleChange = (event: SelectChangeEvent) => {
    setVMFunction(Number(event.target.value as string));
  };

  return (
    <>
      <Typography color='gray'>
        This function accepts 2 arguments: int[] and vm function
      </Typography>
      <div>
        <form className={cls.form} onSubmit={handleSubmit}>
          <TextField
            label='Enter a number:'
            value={inputValue}
            className={cls.form_field}
            onChange={(event) => setInputValue(event.target.value)}
            error={Boolean(error)}
            helperText={error}
          />
          <Button className={cls.form_button} color='secondary' variant='contained' type='submit'>Add</Button>
        </form>
        <Typography variant='h5' className={cls.stack}>
          [
          {numbers.map((number, index) => (
            <Typography
              variant='h5'
              className={cls.typography}
              key={index}
              onClick={() => handleDeleteNumber(index)}
            >
              {number}
              {index < numbers.length - 1 && ', '}
            </Typography>
          ))}
          ]
        </Typography>
        <FormControl className={cls.formControl} fullWidth>
          <InputLabel id='demo-simple-select-label'>Choose function</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={String(VMFunction)}
            label='Choose function'
            onChange={handleChange}
          >
            {Object.entries(VMFunctions).map(([key, value], index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MenuItem key={index} value={value}>{key}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Button
        disabled={numbers.length < 2 || !VMFunction}
        size='large'
        className={cls.btn}
        variant='outlined'
        onClick={execute}
      >
        Execute
      </Button>

      <Typography variant='h5' align='left'>
        Result:
        {result}
      </Typography>

      <Button
        onClick={logout}
        className={cls.disconnect}
        variant='outlined'
        size='large'
        color='error'
      >
        Disconnect wallet
      </Button>
    </>
  );
};
