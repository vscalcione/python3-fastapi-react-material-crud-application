from sqlalchemy import create_engine

engine = create_engine('mysql+pymysql://root:password@localhost:3305/test')
meta = MetaData()
conn = engine.connect()

