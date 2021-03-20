import { BigNumber } from 'ethers';

export const LARGE_ALLOWANCE = BigNumber.from('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF');

export const showErrors = (errors: string[]): JSX.Element | null => {
  if (!!!errors || errors.length === 0) {
    return (null);
  }

  return (
    <div><b>Errors:</b> { errors.join(', ') }</div>
  );
}