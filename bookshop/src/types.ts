export interface INEwBook {
    title: string;
    subtitle: string;
    price: string;
    image: string;
    isbn13: number;
}

export enum INPUT_TYPES {
    TEXTAREA = 'textarea',
    NUMBER = 'number',
    PASSWORD = 'password',
    TEXT = 'text'
}
export interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export interface IInput {
    label?: string;
    className: string;
    value: string | number;
    onChange: Function;
    placeholder: string;
    type: INPUT_TYPES;
    disabled?: boolean;
    errorMessage?: string;
}

export interface IBookProps {
    book: IBook;
}

export interface IBook {
    error: string;
    title: string;
    subtitle: string;
    authors: string;
    publisher: string;
    isbn10: number;
    isbn13: number;
    pages: string;
    year: string;
    rating: string;
    desc: string;
    price: string;
    image: string;
    url: string;
    pdf: {
        [chapter: string]: string;
    };
}

export interface INewBooksProps {
    books: INEwBook[];
}

export interface INewBookState {
    books: INEwBook[];
    currentPage: number;
    itemsPerPage: number;
    selectedBook: IBook;
}

export interface INewBooksResponse {
    count: number;
    books: INEwBook[];
}

export interface ISignUp {
    username: string;
    email: string;
    password: string;
}

export interface IActivationInfo {
    uid: string;
    token: string;
}

export interface ISignIn {
    email: string;
    password: string;
}

export interface IToken {
    access: string;
    refresh: string;
}

export interface IUser {
    username: string;
    id: string;
    email: string;
}

export interface IUserState {
    user: IUser;
}

export interface CartItem extends IBook {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalPrice: number;
}
export interface FavoriteState {
    items: IBook[];
}