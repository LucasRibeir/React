import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import {connect} from 'react-redux';
import DataList from './DataList';

const mapStateProps = state => {
    return {
        data: state.jsonData.data,
        isLoading: state.jsonData.isLoading
    }
}

const DataContainer = ({data, isLoading}) => {
    return (
        <Container>
            {
                isLoading ? (
                    <Spinner animation='border' role='status'></Spinner>
                ) : (
                    <DataList list={data}></DataList>
                )
            }
        </Container>
    )
}

export default connect (mapStateProps) (DataContainer);