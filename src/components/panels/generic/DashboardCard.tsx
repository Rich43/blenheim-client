import React, { FunctionComponent } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, List } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const classes: { [key: string]: React.CSSProperties } = {
    card: {
        minHeight: 175
    },
    cardHeader: {
        minHeight: 75
    }
};

export const DashboardCard: FunctionComponent<{
    title: string;
    redirectURL: string;
    renderListItem: (listItem: string, count: number) => JSX.Element;
    list: string[];
    linkText: string;
}> = ({title, redirectURL, renderListItem, list, linkText}) => {
    let count = 0;
    const navigate = useNavigate();
    return (
        <Card>
            <CardHeader title={title} style={classes.cardHeader}/>
            <CardContent style={classes.card}>
                <List>
                    {list.map(listItem => {
                        if (listItem && count < 5) {
                            count += 1;
                            return renderListItem(listItem, count);
                        }
                        return <></>;
                    })}
                </List>
            </CardContent>
            <CardActions>
                <Button size="small" href="" onClick={() => navigate(redirectURL)}>{linkText}</Button>
            </CardActions>
        </Card>
    );
};
