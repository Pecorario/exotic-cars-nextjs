import { MdPlace } from 'react-icons/md';
import { IoCalendarSharp } from 'react-icons/io5';

import { InputProps } from '@models/UIProps';
import { Container, InputContent } from './styles';

export function Input({ type, value, icon, onChange }: InputProps) {
  return (
    <Container icon={icon}>
      {icon === 'local' ? <MdPlace /> : <IoCalendarSharp />}
      <InputContent type={type} icon={icon} value={value} onChange={onChange} />
    </Container>
  );
}
