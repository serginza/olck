import { memo } from 'react';
import { Icon } from 'shared/index';
import { ContactsWrapper } from './Contacts.styles';

type ContactsProps = {
  phoneNumber?: boolean;
  phone?: boolean;
  vk?: boolean;
  telegram?: boolean;
  size?: number;
};

function ContactsProto({
  phoneNumber,
  phone,
  vk,
  telegram,
  size = 32,
}: ContactsProps) {
  return (
    <ContactsWrapper>
      {phoneNumber && (
        <a
          href="tel:+136745677554"
          target="_blank"
          style={{ fontSize: '1.25rem' }}
        >
          +7 910 888 88 88
        </a>
      )}
      {phone && (
        <a href={'#'} target="_blank">
          <Icon
            path={`src/shared/assets/icons/phone.svg`}
            alt="phone-icon"
            width={size}
            height={size}
          />
        </a>
      )}
      {vk && (
        <a href="https://vk.com/olckluln" target="_blank">
          <Icon
            path={`src/shared/assets/icons/vk.svg`}
            alt="vk-icon"
            width={size}
            height={size}
          />
        </a>
      )}
      {telegram && (
        <a href="https://t.me/Olck_null" target="_blank">
          <Icon
            path={`src/shared/assets/icons/telegram.svg`}
            alt="telegram-icon"
            width={size}
            height={size}
          />
        </a>
      )}
    </ContactsWrapper>
  );
}

export const Contacts = memo(ContactsProto);
