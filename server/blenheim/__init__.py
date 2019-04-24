from graphql import ResolveInfo
from starlette.applications import Starlette
from starlette.graphql import GraphQLApp
import graphene

users = {
    "admin": {
        "name": "admin",
        "password": "Password1",
        "email": "foo@bar.com",
        "first_name": "foo",
        "last_name": "bar"
    }
}


class UserInput(graphene.InputObjectType):
    name = graphene.String(required=True)
    password = graphene.String()


class UserType(graphene.ObjectType):
    name = graphene.String()
    email = graphene.String()
    first_name = graphene.String()
    last_name = graphene.String()


class Query(graphene.ObjectType):
    user = graphene.Field(UserType, details=UserInput(required=True))

    # noinspection PyMethodMayBeStatic,PyUnusedLocal
    async def resolve_user(self, info: ResolveInfo, details: UserInput):
        user = users.get(str(details.name))
        if user and user.get('password') == details.password:
            user_without_password = dict(user)
            del user_without_password['password']
            return UserType(**user_without_password)


app = Starlette()
# noinspection PyTypeChecker
app.add_route('/', GraphQLApp(schema=graphene.Schema(query=Query)))
