import React from 'react';
import './SearchBar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {
    Input, Menu, MenuButton, Button, MenuList, MenuOptionGroup, MenuItemOption
  } from '@chakra-ui/react';

const SearchBar = () => {

    return (
        <div className="search-input">
            <Menu closeOnSelect={true}>
                <MenuButton size="sm" as={Button} ms={3}>
                    검색 조건 ▼
                </MenuButton>
                <MenuList minWidth='100px'>
                    <MenuOptionGroup defaultValue='user' title={'검색 조건'} type='radio'>
                    <MenuItemOption value='user'>유저 검색</MenuItemOption>
                    <MenuItemOption value='feed'>피드 검색</MenuItemOption>
                    <MenuItemOption value='running-crew'>크루 모집글 검색</MenuItemOption>
                    </MenuOptionGroup>
                </MenuList>
                </Menu>
                {/* <input className="underline" placeholder='검색어를 입력해주세요'></input> */}
                <Input width='50%' size='m' variant='flushed' placeholder='검색어를 입력해주세요' ms={3} />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            {/* <InputGroup isCentered>
                <InputLeftElement
                pointerEvents='none'
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                />
                <Input type='text' width='80%' variant='flushed' placeholder='검색어를 입력해주세요' />
            </InputGroup> */}
        </div>
    );
}

export default SearchBar;