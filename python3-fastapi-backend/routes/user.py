from schemas.user import User
from fastapi import APIRouter
from models.user import users
from config.db import conn


user = APIRouter()

@user.get('/')
async def fetch_users():
    return conn.execute(users.select()).fetchall()


@user.get('/{id}')
async def fetch_user(id: int):
    return conn.execute(users.select().where(users.c.id == id)).first()


@user.post('/')
async def create_user(user: User):
    await conn.execute(users.insert().values(
        first_name = user.first_name,
        last_name = user.last_name,
        email = user.email,
        password = user.password
    ))

    return await conn.execute(users.select()).fetchall()


@user.put('/{id}')
async def update_user(id: int, user: User):
    await conn.execute(users.update().values(
        fist_name = user.first_name,
        last_name = user.last_name,
        email = user.email,
        password = user.password
    ).where(users.c.id == id))
    
    return await conn.execute(users.select()).fetchall()


@user.delete('/{id}')
async def delete_user(id: int):
    await conn.execute(users.delete().where(users.c.id == id))
    return await conn.execute(users.select()).fetchall()
